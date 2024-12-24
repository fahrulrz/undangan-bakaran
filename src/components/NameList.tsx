"use client";

import { useEffect, useState } from "react";
import { fetcher } from "@/lib/api";

interface NameListProps {
  id: number;
  name: string;
}

const NameList: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [nameList, setNameList] = useState<NameListProps[]>([]);

  useEffect(() => {
    fetcher("/bakaran-names")
      .then((res) => {
        setNameList(res);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="w-full ">
      <table className="table-auto border-collapse border border-gray-400 w-full">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">List Nama Yang Ikut Bakaran</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td className="border border-gray-300 px-4 py-2">Loading.....</td>
            </tr>
          ) : nameList.length === 0 ? (
            <tr>
              <td className="border border-gray-300 px-4 py-2">Belum ada yang ikut bakaran😞</td>
            </tr>
          ) : (
            nameList.map((item) => (
              <tr key={item.id}>
                <td className="border border-gray-300 px-4 py-2">{item.name}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default NameList;
