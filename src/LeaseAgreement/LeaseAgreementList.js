import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import "./leaseagreementlist.css";
import LeaseAgreementListForm from "./LeaseAgreementListForm.js";

const LeaseAgreementList = () => {
  const [leaseAgreements, setLeaseAgreements] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState({
    key: "lease_id",
    direction: "asc",
  });
  const searchRef = useRef(null);

  useEffect(() => {
    axios
      .get("babackenddbapi.azurewebsites.net/leaseAgreement")
      .then((response) => setLeaseAgreements(response.data))
      .catch((error) =>
        console.error("Fejl ved hentning af leasingaftaler:", error),
      );
  }, []);

  useEffect(() => {
    if (searchRef.current) {
      searchRef.current.focus();
      console.log("here 2");
    }
  }, []);

  const handleSearchChange = (event) => {
    console.log("here 1");
    setSearchTerm(event.target.value);

    if (searchRef.current) {
      searchRef.current.focus();
    }
  };

  const sortColumn = (column) => {
    let direction = "asc";

    if (sortConfig.key === column) {
      direction = sortConfig.direction === "asc" ? "desc" : "asc";
    }

    setSortConfig({ key: column, direction });
  };

  const tableHeaders = [
    { label: "Lease ID", value: "lease_id" },
    { label: "Kunde", value: "customer.name" },
    { label: "Bil", value: "car.carBrand" },
    { label: "Afhentning", value: "pickupLocation.address" },
    { label: "Aflevering", value: "dropoffLocation.address" },
    { label: "Startdato", value: "startDate" },
    { label: "Slutdato", value: "endDate" },
    { label: "Månedlig pris", value: "monthlySubscriptionPrice" },
    { label: "Aftalt kilometer", value: "agreedSubscriptionKM" },
    { label: "Kørte kilometer", value: "kmDriven" },
  ];

  const handleSortChange = (column) => {
    sortColumn(column);
  };

  const filteredLeaseAgreements = searchTerm
    ? leaseAgreements.filter(
        (leaseAgreement) =>
          leaseAgreement.lease_id
            .toString()
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          leaseAgreement.customer.name
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          `${leaseAgreement.car.carBrand} ${leaseAgreement.car.model}`
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          leaseAgreement.pickupLocation.address
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          leaseAgreement.dropoffLocation.address
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          leaseAgreement.startDate
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          leaseAgreement.endDate
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          leaseAgreement.monthlySubscriptionPrice
            .toString()
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          leaseAgreement.agreedSubscriptionKM
            .toString()
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          leaseAgreement.kmDriven
            .toString()
            .toLowerCase()
            .includes(searchTerm.toLowerCase()),
      )
    : leaseAgreements;

  const sortedLeaseAgreements = [...filteredLeaseAgreements].sort((a, b) => {
    if (!sortConfig) return 0;

    const key = sortConfig.key;
    const direction = sortConfig.direction === "asc" ? 1 : -1;

    const valueA = key.includes(".")
      ? key.split(".").reduce((obj, i) => obj[i], a)
      : a[key];
    const valueB = key.includes(".")
      ? key.split(".").reduce((obj, i) => obj[i], b)
      : b[key];

    if (valueA < valueB) return -direction;
    if (valueA > valueB) return direction;
    return 0;
  });

  return (
    <div className="lease-agreement-container">
      <LeaseAgreementListForm
        searchTerm={searchTerm}
        handleSearchChange={handleSearchChange}
        searchRef={searchRef}
        filteredLeaseAgreements={sortedLeaseAgreements}
        sortConfig={sortConfig}
        sortColumn={sortColumn}
        tableHeaders={tableHeaders}
        handleSortChange={handleSortChange}
      />
    </div>
  );
};

export default LeaseAgreementList;
