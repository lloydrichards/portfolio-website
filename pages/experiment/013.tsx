import React from "react";
import Layout from "../../components/Layout";

import {
  AssemblyLine,
  RouteType,
  PathType,
  MaterialType,
  SystemList,
  FormType,
} from "../../components/LifePlastic/Interfaces/Interfaces";
import { RootRoutes } from "../../components/LifePlastic/data/RootRoutes";
import { CombinedRoutes } from "../../components/LifePlastic/Routes/CombinedRoutes";

import { Plastic } from "../../components/LifePlastic/Plastic/PlasticParticles";
import { ParticlePET } from "../../components/LifePlastic/Plastic/ParticlePET";
import { ParticleHDPE } from "../../components/LifePlastic/Plastic/ParticleHDPE";
import { ParticlePP } from "../../components/LifePlastic/Plastic/ParticlePP";
import { ParticlePS } from "../../components/LifePlastic/Plastic/ParticlePS";
import { ParticleLDPE } from "../../components/LifePlastic/Plastic/ParticleLDPE";
import { ParticlePVC } from "../../components/LifePlastic/Plastic/ParticlePVC";
import { ParticleOTHER } from "../../components/LifePlastic/Plastic/ParticleOTHER";
import { ParticleGARBAGE } from "../../components/LifePlastic/Plastic/ParticleGARBAGE";
import { ParticlePellet } from "../../components/LifePlastic/Plastic/ParticlePellet";
import { ParticleBale } from "../../components/LifePlastic/Plastic/ParticleBale";

import { GroundFactories } from "../../components/LifePlastic/GroundFactories";
import { SkyFactories } from "../../components/LifePlastic/SkyFactories";
import { Bins } from "../../components/LifePlastic/Bins";
import { Routes } from "../../components/LifePlastic/Routes";
import { GroundPipesBackground } from "../../components/LifePlastic/GroundPipesBackground";
import { GroundPipesForeground } from "../../components/LifePlastic/GroundPipesForeground";
import { SkyPipesBackground } from "../../components/LifePlastic/SkyPipesBackground";
import { SkyPipesForeground } from "../../components/LifePlastic/SkyPipesForeground";
import { nanoid } from "nanoid";
import { StartingSystems } from "../../components/LifePlastic/data/StartingSystems";
import { FactoryButton } from "../../components/LifePlastic/Buttons";
import UIButtons from "../../components/LifePlastic/UI/NavBar";
import { Diagram } from "../../components/LifePlastic/styles/PlasticStyles";
import RevealBox from "../../components/LifePlastic/UI/RevealBox";
import { GarbageBackground } from "../../components/LifePlastic/Garbage";
import { GarbagePile } from "../../components/LifePlastic/Plastic/GarbagePile";
import { Labels } from "../../components/LifePlastic/Labels";

const Experiment013: React.FC = () => {
  const [materials, setMaterials] = React.useState<AssemblyLine>({
    materials: [],
  });
  const [systems, setSystems] = React.useState<SystemList>(StartingSystems);
  const [garbagePile, setGarbagePile] = React.useState<number>(0);

  const pathBuilder = (path: RouteType): Array<string> => {
    if (path.possible.length === path.probability.length) {
      let arrayReturn: Array<string> = [];
      for (let x = 0; x < path.possible.length; x++) {
        for (let y = 0; y < path.probability[x]; y++) {
          arrayReturn.push(path.possible[x]);
        }
      }
      return arrayReturn;
    } else {
      console.log(
        `The Routes and Probabilities for ${path.parent} don't match!`
      );
      return ["none"];
    }
  };

  const pickPath = (path: RouteType): PathType => {
    //Is there the required system?
    if (systems[path.require]) {
      //Pick random path
      const builtPaths = pathBuilder(path);
      const picked = Math.floor(Math.random() * builtPaths.length);
      return routeLookUp(builtPaths[picked]);
      //else, goes to waste
    } else return routeLookUp(path.toWaste);
  };

  const nextPath = (item: MaterialType) => {
    const currentPath = RootRoutes.find((i) => i.parent === item.name);
    if (currentPath) {
      const nextPath = pickPath(currentPath);
      if (nextPath.type != "undefined") {
        for (var x = 0; x < nextPath.amount; x++)
          nextMaterial(setMaterials)(item, nextPath);
      } else {
        addGarbage(setMaterials)(item);
      }
    } else {
      addGarbage(setMaterials)(item);
    }
  };

  const nextMaterial = (
    setState: (value: React.SetStateAction<AssemblyLine>) => void
  ) => (parent: MaterialType, nextPath: PathType) => {
    const newId = nanoid();
    if (nextPath.type != "undefined") {
      setState((state) => {
        const modifiedMaterials = state.materials.concat([
          {
            name: nextPath.name,
            delay: Math.floor(Math.random() * 10) * 100,
            id: newId,
            type: nextPath.type,
            plastic: nextPath.plastic,
            version: parent.version,
            path: `#${nextPath.name}`,
            highlight: parent.highlight,
          },
        ]);
        const materials = modifiedMaterials.filter((i) => parent.id != i.id);
        return { ...state, materials };
      });
    }
  };

  const addGarbage = (
    setState: (value: React.SetStateAction<AssemblyLine>) => void
  ) => (parent: MaterialType) => {
    setGarbagePile(garbagePile + 1);
    setState((state) => {
      console.log("removed");
      const materials = state.materials.filter((i) => parent.id != i.id);
      return { materials };
    });
  };

  const routeLookUp = (route: string): PathType => {
    const foundRoute = CombinedRoutes.find((i) => i.name === route);
    if (foundRoute) {
      return foundRoute;
    } else {
      return {
        name: "undefined",
        plastic: "undefined",
        type: "undefined",
        amount: 1,
        path: "undefined",
      };
    }
  };

  const addRecyclable = (route: string) => {
    const newId = nanoid();
    const startRoute = routeLookUp(route);
    setMaterials((state) => {
      const materials = state.materials.concat({
        name: startRoute.name,
        delay: 0,
        id: newId,
        type: startRoute.type,
        plastic: startRoute.plastic,
        version: Math.floor(Math.random() * 2),
        path: `#${startRoute.name}`,
        highlight: false,
      });
      return { ...state, materials };
    });
  };

  const toggleSystem = (id: any) => {
    if (Object.keys(systems).find((i) => i == id)) {
      const verifiedId: keyof SystemList = id;
      const selectedSystem = systems[verifiedId];
      if (selectedSystem) {
        console.log(`${verifiedId} turned OFF`);
        setSystems({ ...systems, [verifiedId]: false });
      } else {
        console.log(`${verifiedId} turned ON`);
        setSystems({ ...systems, [verifiedId]: true });
      }
    } else {
      console.log(`${id} is not a valid ID`);
    }
  };

  const plasticColourPicker = (type: keyof FormType) => {
    switch (type) {
      case "PET":
        return "#d50000";
      case "HDPE":
        return "#aa00ff";
      case "PP":
        return "#304ffe";
      case "PS":
        return "#00b8d4";
      case "LDPE":
        return "#00c853";
      case "PVC":
        return "#ffd600";
      case "OTHER":
        return "#ff6d00";
      case "MIXED":
        return "#78909c";
      case "GARBAGE":
        return "#424242";
      default:
        return "#424242";
    }
  };
  return (
    <Layout title="Experiment | 013">
      <h2>013 - Making the UI</h2>
      <h4>Date: June 23rd 2020</h4>
      <p>
        With the majority of the system elements in place its start to impliment
        the the code. My idea is the move the buttons to the bottom and then
        have a splash screen that hides the diagram at first. After reading a
        short intoduction as well as a small tutorial on how to use the diagram,
        the splash screen will fade to reveal the buttons and diagrams
      </p>
      <RevealBox>
        <h1>Life of Plastic</h1>
        <h3>...it's fantastic!</h3>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <h2>Scroll down to reveal...</h2>

        <p style={{ margin: "0 auto", padding: "800px 400px" }}>
          Here will be a whole lot of text about stuff, probably about plastic
          but who knows?
        </p>
      </RevealBox>
      <Diagram>
        <GarbagePile GarbagePile={garbagePile} />
        <Labels systems={systems} />
        <GarbageBackground />
        <SkyPipesBackground systems={systems} />
        <GroundPipesBackground systems={systems} />
        <GroundFactories systems={systems} />
        <SkyFactories systems={systems} />
        <GroundPipesForeground systems={systems} />
        <SkyPipesForeground systems={systems} />
        <Bins systems={systems} />
        {materials.materials.map((item) => {
          switch (item.type) {
            case "PET":
              return (
                <ParticlePET
                  key={item.id}
                  id={item.id}
                  colour={plasticColourPicker(item.plastic)}
                  delay={item.delay}
                  version={item.version}
                  pathRef={item.path}
                  onComplete={() => nextPath(item)}
                />
              );
            case "HDPE":
              return (
                <ParticleHDPE
                  key={item.id}
                  id={item.id}
                  colour={plasticColourPicker(item.plastic)}
                  delay={item.delay}
                  version={item.version}
                  pathRef={item.path}
                  onComplete={() => nextPath(item)}
                />
              );
            case "PP":
              return (
                <ParticlePP
                  key={item.id}
                  id={item.id}
                  colour={plasticColourPicker(item.plastic)}
                  delay={item.delay}
                  version={item.version}
                  pathRef={item.path}
                  onComplete={() => nextPath(item)}
                />
              );
            case "PS":
              return (
                <ParticlePS
                  key={item.id}
                  id={item.id}
                  colour={plasticColourPicker(item.plastic)}
                  delay={item.delay}
                  version={item.version}
                  pathRef={item.path}
                  onComplete={() => nextPath(item)}
                />
              );
            case "LDPE":
              return (
                <ParticleLDPE
                  key={item.id}
                  id={item.id}
                  colour={plasticColourPicker(item.plastic)}
                  delay={item.delay}
                  version={item.version}
                  pathRef={item.path}
                  onComplete={() => nextPath(item)}
                />
              );
            case "PVC":
              return (
                <ParticlePVC
                  key={item.id}
                  id={item.id}
                  colour={plasticColourPicker(item.plastic)}
                  delay={item.delay}
                  version={item.version}
                  pathRef={item.path}
                  onComplete={() => nextPath(item)}
                />
              );
            case "Bale":
              return (
                <ParticleBale
                  key={item.id}
                  id={item.id}
                  colour={plasticColourPicker(item.plastic)}
                  delay={item.delay}
                  version={item.version}
                  pathRef={item.path}
                  onComplete={() => nextPath(item)}
                />
              );
            case "Regrind":
              return (
                <Plastic
                  key={item.id}
                  id={item.id}
                  colour={plasticColourPicker(item.plastic)}
                  delay={item.delay}
                  version={item.version}
                  pathRef={item.path}
                  onComplete={() => nextPath(item)}
                />
              );
            case "Pellet":
              return (
                <ParticlePellet
                  key={item.id}
                  id={item.id}
                  colour={plasticColourPicker(item.plastic)}
                  delay={item.delay}
                  version={item.version}
                  pathRef={item.path}
                  onComplete={() => nextPath(item)}
                />
              );
            case "OTHER":
              return (
                <ParticleOTHER
                  key={item.id}
                  id={item.id}
                  colour={plasticColourPicker(item.plastic)}
                  delay={item.delay}
                  version={item.version}
                  pathRef={item.path}
                  onComplete={() => nextPath(item)}
                />
              );
            case "MIXED":
              return (
                <ParticleGARBAGE
                  key={item.id}
                  id={item.id}
                  colour={plasticColourPicker(item.plastic)}
                  delay={item.delay}
                  version={item.version}
                  pathRef={item.path}
                  onComplete={() => nextPath(item)}
                />
              );
            case "GARBAGE":
              return (
                <ParticleGARBAGE
                  key={item.id}
                  id={item.id}
                  colour={plasticColourPicker(item.plastic)}
                  delay={item.delay}
                  version={item.version}
                  pathRef={item.path}
                  onComplete={() => nextPath(item)}
                />
              );
          }
        })}
        <Routes
          routeStyle={{
            GarbageLines: "none",
            MixedLines: "none",
            BaleLines: "none",
            PelletLines: "none",
            RegrindLines: "none",
            HandLines: "none",
            ProductsLines: "none",
            MissingLines: "none",
          }}
        />
        <FactoryButton
          systems={systems}
          getSystemId={(id) => toggleSystem(id)}
        />
      </Diagram>
      <UIButtons systems={systems} addRecyclable={addRecyclable} />
    </Layout>
  );
};

export default Experiment013;
