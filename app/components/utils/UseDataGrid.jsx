import { DataGrid } from "@mui/x-data-grid";

function UseDataGrid({ rows = [], columns = [], checkboxSelection = false }) {
    /*
        renderCell: (params) => {
            params.value = ค่าของ field นั้นใน row
            params.row   = ทั้งแถว
            params.field = ชื่อ column
        }

        ใส่ columnVisibilityModel={{ age: false }} ใน component เพื่อ ซ่อน column

        ใส่ flex: 1 ใน columns เพื่อกำหนดความกว้าง

        ใส่ editable: true ใน columns เพื่อแก้ไข cell

        ใส่ sortable: false ใน columns เพื่อปิด sort
    */
    return (
        <div style={{ height: 500, width: "100%" }}>
            <DataGrid
                rows={rows}
                columns={columns}
                checkboxSelection={checkboxSelection}
                onRowSelectionModelChange={(ids) => {
                    const selectedIds = Array.from(ids.ids);
                    const selectedRowsData = selectedIds.map((id) => rows.find((row) => row.id === id)).filter(Boolean);

                    // console.log("selectedIds", selectedIds);
                    // console.log("selectedRowsData", selectedRowsData);
                }}
                // pageSizeOptions={[5, 10, 20, 30]}
                // initialState={{
                //     pagination: {
                //         paginationModel: { page: 0, pageSize: 5 },
                //     },
                // }}
                // แก้ text เป็นภาษาไทย
                localeText={{
                    paginationDisplayedRows: ({ from, to, count }) =>
                        `${from} ถึง ${to} จาก ${count !== -1 ? count : `มากกว่า ${to}`}`,
                    footerRowSelected: (count) => `เลือกแล้ว ${count} แถว`,
                    paginationRowsPerPage: "แถวต่อหน้า",
                    columnMenuManageColumns: "จัดการ column",
                    columnMenuHideColumn: "ซ่อน column",
                    columnMenuSortAsc: "เรียงจากน้อยไปมาก",
                    columnMenuSortDesc: "เรียงจากมากไปน้อย",
                    columnMenuUnsort: "ล้างค่า",
                    noColumnsOverlayLabel: "ไม่มีข้อมูล",
                    noColumnsOverlayManageColumns: "จัดการ column",
                }}
            />
        </div>
    );
}

export default UseDataGrid;
