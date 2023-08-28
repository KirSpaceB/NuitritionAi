'use client'
import { useContext } from 'react';
import { MeasurementContext } from '../shared/context/MeasurementsData';
import React from 'react'
import Measurements from '../shared/Measurements'


export default function EnterMeasurements() {
  const contextValues = useContext(MeasurementContext)

  if (contextValues == null) {
    throw new Error("EnterMeasurements must be used within a MeasurementsProvider. Check Line 12 in Enter Measurements.tsx");
  }

  return (
    <div>
      <Measurements measurements={contextValues?.measurements} updateMeasurements={contextValues?.updateMeasurements}/>
    </div>
  )
}
