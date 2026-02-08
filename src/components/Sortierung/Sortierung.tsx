import * as React from "react";
import { users } from "../../services/users";
import type { User } from "../../types/user";
import { TiArrowUnsorted, TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti";

type SortConfig = {
  key: keyof User;
  direction: "asc" | "desc";
} | null;

const Sortierung = () => {
  const [sortConfig, setSortConfig] = React.useState<SortConfig>(null);

  const sortedUsers = React.useMemo(() => {
    let sortableItems = [...users];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        const aValue = a[sortConfig.key];
        const bValue = b[sortConfig.key];

        if (aValue < bValue) return sortConfig.direction === "asc" ? -1 : 1;
        if (aValue > bValue) return sortConfig.direction === "asc" ? 1 : -1;
        return 0;
      });
    }
    return sortableItems;
  }, [sortConfig]);

  const requestSort = (key: keyof User) => {
    let direction: "asc" | "desc" = "asc";

    if (sortConfig?.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }

    setSortConfig({ key, direction });
  };

  const columns: { label: string; key: keyof User }[] = [
    { label: "ID", key: "id" },
    { label: "First Name", key: "firstName" },
    { label: "Last Name", key: "lastName" },
    { label: "Email", key: "email" },
    { label: "Phone", key: "tel" },
    { label: "Birthday", key: "dateOfBirth" },
    { label: "Address", key: "address" },
  ];

  return (
    <table className="table">
      <thead>
        <tr>
          {columns.map((col) => (
            <th key={col.key} onClick={() => requestSort(col.key)}>
              {col.label}
              {sortConfig?.key === col.key ? sortConfig.direction === "asc" ? <TiArrowSortedUp /> : <TiArrowSortedDown /> : <TiArrowUnsorted />}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {sortedUsers?.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.email}</td>
            <td>{user.tel}</td>
            <td>{user.dateOfBirth}</td>
            <td>{user.address}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Sortierung;
