import { Router } from "express";

const subscriptionRouter = Router();

subscriptionRouter.get("/", (req, res) => {
  res.send({ message: "GET all subscriptions" });
});
subscriptionRouter.get("/:id", (req, res) => {
  res.send({ message: "GET subscription details" });
});
subscriptionRouter.post("/", (req, res) => {
  res.send({ message: "create new subscription" });
});
subscriptionRouter.put("/", (req, res) => {
  res.send({ message: "Update subscription" });
});
subscriptionRouter.delete("/:id", (req, res) => {
  res.send({ message: "Delete subscription" });
});

subscriptionRouter.get("/users/:id", (req, res) => {
  res.send({ message: "GET all subscriptions for a user" });
});
subscriptionRouter.get("/:id/cancel", (req, res) => {
  res.send({ message: "cancel subscriptions" });
});
subscriptionRouter.get("/upcoming-renewals", (req, res) => {
  res.send({ message: "GET upcoming renewals " });
});

export default subscriptionRouter;
