import { IMeasurements } from "../components/shared/context/MeasurementsData";

export async function sendMeasurementsToApi(measurements: IMeasurements) {
  
  if (measurements == null || measurements == undefined) {
    console.error('measurements is undefined: This code is coming from line 6 of post_measurements.ts')
  }
  const request = await fetch('http://localhost:5000/connected_api', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(measurements),
  });
  const response = await request.json();
  console.log(response)
}
