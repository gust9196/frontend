import React from "react";

function LeaseAgreementListForm({
  searchTerm,
  handleSearchChange,
  searchRef,
  filteredLeaseAgreements,
  sortConfig,
  tableHeaders,
  handleSortChange,
}) {
  console.log("here 3");

  return (
    <div className="lease-agreement-list-form">
      <div className="lease-agreement-list-container">
        <h2>Liste over leasingaftaler</h2>
        <input
          type="text"
          placeholder="Søg..."
          ref={searchRef}
          value={searchTerm}
          onChange={handleSearchChange}
          className="search-input"
        />
        <table className="lease-agreement-table">
          <thead>
            <tr>
              {tableHeaders.map((header, index) => (
                <th key={index}>
                  {header.label}
                  <button
                    onClick={() => handleSortChange(header.value)}
                    className="sort-button"
                  >
                    {sortConfig.key === header.value ? (
                      sortConfig.direction === "asc" ? (
                        <span>&uarr;</span>
                      ) : (
                        <span>&darr;</span>
                      )
                    ) : (
                      <span>&uarr;&darr;</span>
                    )}
                  </button>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredLeaseAgreements.map((leaseAgreement) => (
              <tr key={leaseAgreement.lease_id}>
                <td>{leaseAgreement.lease_id}</td>
                <td>{leaseAgreement.customer.name}</td>
                <td>{`${leaseAgreement.car.carBrand} ${leaseAgreement.car.model}`}</td>
                <td>{leaseAgreement.pickupLocation.address}</td>
                <td>{leaseAgreement.dropoffLocation.address}</td>
                <td>{leaseAgreement.startDate}</td>
                <td>{leaseAgreement.endDate}</td>
                <td>{leaseAgreement.monthlySubscriptionPrice}</td>
                <td>{leaseAgreement.agreedSubscriptionKM}</td>
                <td>{leaseAgreement.kmDriven}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default LeaseAgreementListForm;
