import { DataGrid } from '@mui/x-data-grid';
import PropTypes from "prop-types";
import CustomTypography from '../CustomTypography';
import CustomBox from '../CustomBox';

const CustomDataGrid = ({
    rows,
    columns,
    customHeight,
}) => {
    const columnsData = columns.map((column) => {
        return ({
            field: column.field,
            headerName: column.name,
            flex: column.flex,
            width: column.width,
            disableColumnMenu: true,
            sortable: column.sortable ? column.sortable : false,
            renderCell: (params) => (
                    column.type === "images" ?
                        <>
                            <img className='image' src={params.row.image} />
                        </>
                                :
                                <CustomTypography variant="caption" color="dark"
                                    sx={({ typography: { size } }) => ({
                                        fontSize: size.sm
                                    })}
                                >
                                    {params.row[column.field]}
                                </CustomTypography>
            )
        })
    })


    return (

        <CustomBox style={{ height: customHeight ? customHeight : 250, width: "100%" }}
        >
            <DataGrid
                rows={rows}
                columns={columnsData}
                style={{
                    border: 0,
                    // cursor: onRowClick && ("pointer"),
                }}
                checkboxSelection={false}
                disableRowSelectionOnClick
                // rowsPerPageOptions={[25, 50, 100]}
                isSelectable={false}
                density="standard"
                disableColumnMenu
                disableSelectionOnClick
            />
        </CustomBox>

    )
}

// Setting default values for the props of CustomDataGrid
CustomDataGrid.defaultProps = {
    checkboxSelection: false,
    customHeight: 250,
    localeText: {
        noRowsLabel: 'No rows found',
    },
    loading: false,
    isSelectable: true
};

// Typechecking props for the CustomDataGrid
CustomDataGrid.propTypes = {
    rows: PropTypes.array.isRequired,
    columns: PropTypes.array.isRequired,
    checkboxSelection: PropTypes.bool,
    onRowClick: PropTypes.func,
    customHeight: PropTypes.number,
    localeText: PropTypes.object,
    loading: PropTypes.bool,
    isSelectable: PropTypes.bool
};

export default CustomDataGrid