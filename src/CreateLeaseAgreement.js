import React, { useEffect } from 'react';
import axios from 'axios';

function CreateLeaseAgreement({ agreementData }) {
  useEffect(() => {
    const createLeaseAgreement = async () => {
      try {
        const backendEndpoint = 'http://localhost:4000/leaseAgreement/create';

        // Send data til backend via Axios
        const response = await axios.post(backendEndpoint, agreementData);

        console.log('Aftale oprettet:', response.data);
        // Tilføj logik her, f.eks. vise en bekræftelsesbesked til brugeren.
      } catch (error) {
        console.error('Fejl ved oprettelse af aftale:', error);
        // Håndter fejl, f.eks. vis en fejlmeddelelse til brugeren.
      }
    };

    // Kald funktionen når komponenten monteres
    createLeaseAgreement();
  }, [agreementData]);

  return <div>Opretter leasingaftale...</div>;
}

export default CreateLeaseAgreement;
