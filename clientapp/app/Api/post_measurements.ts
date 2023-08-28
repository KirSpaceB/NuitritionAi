import { IMeasurements } from "../components/shared/context/MeasurementsData";

export async function sendMeasurementsToApi(measurements: IMeasurements) {
  console.log('measuyrements in sendMeasurementsToAPi',measurements)
  const request = await fetch('http://localhost:5000/apifromflask', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(measurements),
  });

  return request.json();
}
