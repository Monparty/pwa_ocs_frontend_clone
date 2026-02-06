"use client";
import { useForm } from "react-hook-form";
import UseTextField from "../../components/inputs/UseTextField";
import UseNumberField from "../../components/inputs/UseNumberField";
import UseSelect from "../../components/inputs/UseSelect";
import UseButton from "../../components/inputs/UseButton";
import { schema } from "./schema";
import { yupResolver } from "@hookform/resolvers/yup";
import SaveIcon from "@mui/icons-material/Save";
import { useEffect, useState } from "react";
import UseDataGrid from "../../components/utils/UseDataGrid";
import { supabase } from "@/app/lib/supabase/client";

function FormTest() {
    const [userData, setUserData] = useState([]);

    const { handleSubmit, watch, control } = useForm({
        resolver: yupResolver(schema),
        mode: "onBlur",
    });

    useEffect(() => {
        const onGetUers = async () => {
            const { data, error } = await supabase.from("users").select("*");
            console.log("error", error);
            setUserData(data);
        };
        onGetUers();
    }, []);

    console.log("userData", userData);

    const onSubmit = (data) => {
        console.log("data submit", data);
    };

    const columns = [
        { field: "name", headerName: "Product Name", flex: 1, editable: true },
        {
            field: "description",
            headerName: "Description",
            flex: 1,
            sortable: false,
            renderCell: (params) => {
                return params.value;
            },
        },
    ];

    const rows = [
        { id: 1, name: "Data Grid", description: "the Community version" },
        { id: 2, name: "Data Grid Pro", description: "the Pro version" },
        { id: 3, name: "Data Grid Premium", description: "11 remium version" },
        { id: 4, name: "Data Grid Premium", description: " 22emium version" },
        { id: 5, name: "Data Grid Premium", description: "33ium version" },
        { id: 6, name: "Data Grid Premium", description: "the Premium version" },
        { id: 7, name: "Data Grid Premium", description: "the Premium version" },
        { id: 8, name: "Data Grid Premium", description: "the Premium version" },
        { id: 9, name: "Data Grid Premium", description: "the Premium version" },
        { id: 10, name: "Data Grid Premium", description: "the Premium version" },
        { id: 11, name: "Data Grid Premium", description: "the Premium version" },
    ];

    // console.log(watch());

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex items-center gap-2 mb-6">
                    <UseTextField control={control} name="name" label="name" />
                    <UseNumberField control={control} name="age" label="age" min={0} max={15} step />
                    <UseSelect
                        control={control}
                        name="gender"
                        label="gender"
                        options={[
                            {
                                label: "mon 11111",
                                value: "1",
                            },
                            {
                                label: "maii 22222",
                                value: "2",
                            },
                            {
                                label: "kwan 333333",
                                value: "3",
                            },
                        ]}
                    />
                    <UseButton type="submit" icon={SaveIcon} label="save" />
                </div>
                <div className="h-125">
                    <UseDataGrid
                        rows={rows}
                        columns={columns}
                        checkboxSelection={true}
                        onRowSelectionModelChange={(ids, rowData) => {
                            console.log("ids", ids);
                            console.log("rowData", rowData);
                        }}
                    />
                </div>
            </form>
        </div>
    );
}

export default FormTest;
