import React from "react";

export function Mission() {
  return (
    <React.Fragment>
      <p className="mt-[-12rem] border-l-2 border-r-2 border-b-2 border-primary shadow-xl pt-2 p-2">
        Onekoo Coffee's mission is to provide the finest quality coffee while
        fostering sustainable development and enhancing the lives of coffee
        farmers and communities. This reflects the company's dedication to
        ethical sourcing, superior coffee products, and positive social impact.
      </p>
    </React.Fragment>
  );
}

export function Vision() {
  return (
    <React.Fragment>
      <p className="mt-[-12rem] border-l-2 border-r-2 border-b-2 border-primary shadow-xl pt-2 p-2">
        The vision of Onekoo Coffee is to be a global leader in the coffee
        industry, renowned for ethical sourcing, superior coffee products, and
        positive social impact. The company aspires to achieve this by
        maintaining a strong commitment to quality, sustainability, community,
        and innovation.
      </p>
    </React.Fragment>
  );
}

export function Values() {
  return (
    <React.Fragment>
      <p className="mt-[-12rem] border-l-2 border-r-2 border-b-2 border-primary shadow-xl pt-2 p-2">
        Onekoo Coffee's core values include a commitment to delivering the
        highest quality coffee through meticulous sourcing and roasting
        processes, ensuring environmentally friendly practices and promoting
        sustainable farming methods, empowering local communities through job
        creation, fair trade practices, and community development initiatives,
        and continuously evolving offerings and operations to stay ahead in the
        coffee industry.
      </p>
    </React.Fragment>
  );
}

export function Objectives() {
  return (
    <React.Fragment>
      <p className="mt-[-12rem] border-l-2 border-r-2 border-b-2 border-primary shadow-xl pt-2 p-2">
        Onekoo Coffee's objectives encompass expanding its presence both locally
        and internationally, maintaining a strong commitment to ethical
        sourcing, continuously enhancing product offerings and operations
        through innovative initiatives, reinvesting profits into local
        communities to support education, healthcare, and infrastructure, and
        targeting both local and export markets to expand its market presence
        and reach a global audience. These objectives reflect the company's
        strategic focus on expansion, ethical sourcing, quality, innovation,
        community impact, and market presence.
      </p>
    </React.Fragment>
  );
}

export function Strategies() {
  return (
    <React.Fragment>
      <p className="mt-[-12rem] border-l-2 border-r-2 border-b-2 border-primary shadow-xl pt-2 p-2">
        The strategies employed by Onekoo Coffee include ethical sourcing by
        directly obtaining coffee beans from Ethiopian farmers, offering premium
        quality products with unique aroma and rich flavors, reinvesting profits
        into local communities, continuously exploring new ways to enhance
        product offerings and improve operations, and targeting both local and
        export markets to expand its market presence.
      </p>
    </React.Fragment>
  );
}

type Ingredient = {
  icon: string,
  label: string,
};

const allIngredients: Ingredient[] = [
  { icon: <Mission />, label: "MISSION" },
  { icon: <Vision />, label: "VISION" },
  { icon: <Values />, label: "VALUES" },
  { icon: <Objectives />, label: "OBJECTIVES" },
  { icon: <Strategies />, label: "STRATEGIES" },
];

const [MISSION, VISION, VALUES, OBJECTIVES, STRATEGIES] = allIngredients;
const initialTabs: Ingredient[] = [
  MISSION,
  VISION,
  VALUES,
  OBJECTIVES,
  STRATEGIES,
];

// Function to get the next ingredient
const getNextIngredient = (
  ingredients: Ingredient[]
): Ingredient | undefined => {
  const existing = new Set(ingredients.map((ingredient) => ingredient.label));
  return allIngredients.find((ingredient) => !existing.has(ingredient.label));
};

export { allIngredients, initialTabs, getNextIngredient };
