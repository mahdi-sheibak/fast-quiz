import ky from "ky"

import { Master } from "@/lib/schema"

const api = ky.extend({
  prefixUrl: process.env.BASE_URL || "http://localhost:3000/api/",
})

export const createMaster = (master: Master) => {
  return api
    .post("register/master", {
      json: master,
    })
    .json()
}
