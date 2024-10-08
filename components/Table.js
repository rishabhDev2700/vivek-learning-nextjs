
export const Table = ({ items }) => {
    return (
        <table border="1" cellPadding="10" cellSpacing="0">
            <thead>
                <tr>
                    <th>Column 1</th>
                    <th>Column 2</th>
                </tr>
            </thead>
            <tbody>
                {items.map((item, index) => (
                    <tr key={index}>
                        <td>{item.column1}</td>
                        <td>{item.column2}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

