import { pro, advanced, arcade } from "../multi-step-form-main";

export const sideBarMenuarray = [
  {
    number: 1,
    step: "step 1",
    menu: "your info",
    path: "/",
  },
  {
    number: 2,
    step: "step 2",
    menu: "select plan",
    path: "/select-plan",
  },
  {
    number: 3,
    step: "step 3",
    menu: "Add-ons",
    path: "/add-ons",
  },
  {
    number: 4,
    step: "step 4",
    menu: "summary",
    path: "/summary",
  },
];

export const userInfoField = [
  {
    name: "name",
    type: "text",
    label: "name",
    placeholder: " e.g Stephen King",
  },
  {
    name: "email",
    type: "text",
    label: "email Address",
    placeholder: "e.g stephenking@gmail.com",
  },
  {
    name: "phone",
    type: "tel",
    label: "phone number",
    placeholder: "e.g +234 706 607 098",
  },
];

export const planSelect = [
  {
    image: arcade,
    plan: "Arcade",
    price: 9,
    annual:90
  },
  {
    image: advanced,
    plan: "Advanced",
    price: 12,
    annual:120
  },
  {
    image: pro,
    plan: "Pro",
    price: 15,
    annual:150
  },
];

export const addOnsPick = [
  {
    package: "Online service",
    comment: "Access to multiplayer games",
    price: 1,
    yearly:10
  },
  {
    package: "Larger storage",
    comment: "Extra 1TB of cloud save",
    price: 2,
    yearly:20
  },
  {
    package: "Customizable profile",
    comment: "Custom theme on your profile",
    price: 2,
    yearly:20
  },
];
