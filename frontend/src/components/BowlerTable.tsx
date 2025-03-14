import { useState, useEffect } from "react";
import axios from "axios";

interface Bowler {
    bowlerID: number;      // ✅ Matches API output
    firstName: string;     // ✅ Matches API output
    middleInit?: string;   // ✅ Matches API output
    lastName: string;      // ✅ Matches API output
    teamName: string;      // ✅ Matches API output
    address: string;       // ✅ Matches API output
    city: string;          // ✅ Matches API output
    state: string;         // ✅ Matches API output
    zip: string;           // ✅ Matches API output
    phoneNumber: string;   // ✅ Matches API output
}


const BowlerTable: React.FC = () => {
    const [bowlers, setBowlers] = useState<Bowler[]>([]);

    useEffect(() => {
        axios.get("https://localhost:7101/api/bowlers")
            .then(response => setBowlers(response.data))
            .catch(error => console.error("Error fetching data:", error));
    }, []);

    return (
        <div>
            <h2>Players</h2>
            <table border={1}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Team</th>
                        <th>Address</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Zip</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {bowlers.map((bowler) => (
                        <tr key={bowler.bowlerID}> {/* ✅ Matches API field */}
                            <td>{`${bowler.firstName || ""} ${bowler.middleInit || ""} ${bowler.lastName || ""}`}</td>
                            <td>{bowler.teamName}</td>
                            <td>{bowler.address}</td>
                            <td>{bowler.city}</td>
                            <td>{bowler.state}</td>
                            <td>{bowler.zip}</td>
                            <td>{bowler.phoneNumber}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default BowlerTable;
