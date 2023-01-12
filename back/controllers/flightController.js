import asyncHandler from "express-async-handler";
import express from "express";
import mongoose from "mongoose";
import Flight from "../models/flightModel.js";

export const addNewFlight = asyncHandler(async (req, res) => {
  // const {name , number , from , to , fromDate , toDate , fromTime , toTime , duration , stops , price} = req.body;
  const {
    flight_name,
    img,
    departure_time,
    departure_date,
    arrival_time,
    arrival_date,
    price_adult,
    price_baby,
    from,
    to,
    seats,
  } = req.body;

  try {
    const flight = await Flight.create({
      flight_name,
      img,
      departure_time,
      departure_date,
      arrival_time,
      arrival_date,
      price_adult,
      price_baby,
      from,
      to,
      seats,
    });

    res.json(flight);
  } catch (error) {
    res.status(500);
    throw new Error(error);
  }
});

export const getFlights = asyncHandler(async (req, res) => {
  try {
    const flights = await Flight.find({});
    res.json(flights);
  } catch (error) {
    res.status(500);
    throw new Error();
  }
});

export const getFlight = asyncHandler(async (req, res) => {
  const id = req.params.id;

  try {
    const flights = await Flight.findById(id);
    res.json(flights);
  } catch (error) {
    res.status(500);
    throw new Error();
  }
});

export const updateFlight = asyncHandler(async (req, res) => {
  const id = req.params.id;

  const flight = await Flight.findById(id);

  const {
    flight_name,
    img,
    departure_time,
    departure_date,
    arrival_time,
    price_adult,
    price_baby,
    from,
    to,
    seats,
  } = req.body;

  try {
    const flightUpdated = await Flight.findByIdAndUpdate(id, {
      flight_name,
      img,
      departure_time,
      departure_date,
      arrival_time,
      price_adult,
      price_baby,
      from,
      to,
      id,
      seats,
    });

    res.json(flightUpdated);
  } catch (error) {
    res.status(500);
    throw new Error(error);
  }
});

export const deleteFlight = asyncHandler(async (req, res) => {
  const id = req.params.id;

  const flight = await Flight.findById(id);

  if (flight) {
    const flightUpdated = await Flight.findByIdAndRemove(id);
    res.json(flightUpdated);
  } else {
    res.status(500);
    throw new Error(error);
  }
});
