'use client'

import { PropsWithChildren, createContext, useState } from "react";

export interface IMeasurements {
  height:string,
  weight:string,
}
interface IMeasurementsContext {
  measurements:IMeasurements,
  updateMeasurements: (type: keyof IMeasurements, value:string) => void;
}

export const MeasurementContext = createContext<IMeasurementsContext | undefined>(undefined);

export function MeasurementsProvider(props: PropsWithChildren<{}>) {
  const [measurements, setMeasurements] = useState<IMeasurements>({
    height:'',
    weight:''
  })

  const updateMeasurements = (type:keyof IMeasurements, value:string) => {
    setMeasurements((prev) => ({
      ...prev,
      [type]:value
    }));
  };

  return (
    <MeasurementContext.Provider value={{measurements, updateMeasurements}}>
      {props.children}
    </MeasurementContext.Provider>
  )
}