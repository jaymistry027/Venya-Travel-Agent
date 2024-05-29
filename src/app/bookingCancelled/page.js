'use client'
import React from 'react'
import NavMain from '../NavMain'
import Box from '@mui/material/Box';
import { DataGrid,DataGridOverlay } from '@mui/x-data-grid';
 import './bookingCancelled.css';
import { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { GridRowClassNameParams } from '@mui/x-data-grid';
import "../general.css";

const columns = [
    { field: 'id',
     headerName: 'Booking Id', 
     width: 292,
     headerClassName:'head1',
    },

    {
        field: 'propertyName',
        headerName: 'Property Name',
        width: 330,
        headerClassName:'head1',

    },
    {
        field: 'cincout',
        headerName: 'Check In - Check Out',
        width: 350,
        headerClassName:'head1',

    },
    {
        field: 'totalPAX',
        headerName: 'Total PAX',
        width: 280,
        headerClassName:'head1',

    },
    {
        field: 'guestName',
        headerName: 'Guest Name',
        description: 'This column has a value getter and is not sortable.',
        width:308,
        headerClassName:'head1',
    },
    {
        field: 'reason',
        headerName: 'Reason',
        description: 'This column has a value getter and is not sortable.',
        width:300,
        headerClassName:'head1',
    },
];

const rows = [
    { id: "1", totalPayablePrice: '₹50000/- Incl. of all taxes', propertyName: 'Sheraton Grand Cape Coral', cincout: '21/09/2023 - 30/09/2023', totalPAX: '15 PAX+ 2 Pets', guestName: "Rajesh Hiralal Kotwal" ,reason:"Payment Failed"},
    { id: "2", totalPayablePrice: '₹50000/- Incl. of all taxes', propertyName: 'Sheraton Grand Cape Coral', cincout: '21/09/2023 - 30/09/2023', totalPAX: '15 PAX+ 2 Pets', guestName: "Rajesh Hiralal Kotwal",reason:"Payment Failed" },
    { id: "3", totalPayablePrice: '₹50000/- Incl. of all taxes', propertyName: 'Sheraton Grand Cape Coral', cincout: '21/09/2023 - 30/09/2023', totalPAX: '15 PAX+ 2 Pets', guestName: "Rajesh Hiralal Kotwal" ,reason:"Payment Failed"},
    { id: "4", totalPayablePrice: '₹50000/- Incl. of all taxes', propertyName: 'Sheraton Grand Cape Coral', cincout: '21/09/2023 - 30/09/2023', totalPAX: '15 PAX+ 2 Pets', guestName: "Rajesh Hiralal Kotwal" ,reason:"Payment Failed"},
    { id: "5", totalPayablePrice: '₹50000/- Incl. of all taxes', propertyName: 'Sheraton Grand Cape Coral', cincout: '21/09/2023 - 30/09/2023', totalPAX: '15 PAX+ 2 Pets', guestName: "Rajesh Hiralal Kotwal" ,reason:"Payment Failed"},
    { id: "6", totalPayablePrice: '₹50000/- Incl. of all taxes', propertyName: "Sheraton Grand Cape Coral", cincout: '21/09/2023 - 30/09/2023', totalPAX: '15 PAX+ 2 Pets', guestName: "Rajesh Hiralal Kotwal" ,reason:"Payment Failed"},
    { id: "7", totalPayablePrice: '₹50000/- Incl. of all taxes', propertyName: 'Sheraton Grand Cape Coral', cincout: '21/09/2023 - 30/09/2023', totalPAX: '15 PAX+ 2 Pets', guestName: "Rajesh Hiralal Kotwal" ,reason:"Payment Failed"},
    { id: "8", totalPayablePrice: '₹50000/- Incl. of all taxes', propertyName: 'Sheraton Grand Cape Coral', cincout: '21/09/2023 - 30/09/2023', totalPAX: '15 PAX+ 2 Pets', guestName: "Rajesh Hiralal Kotwal",reason:"Payment Failed" },
    { id: "9", totalPayablePrice: '₹50000/- Incl. of all taxes', propertyName: 'Sheraton Grand Cape Coral', cincout: '21/09/2023 - 30/09/2023', totalPAX: '15 PAX+ 2 Pets', guestName: "Rajesh Hiralal Kotwal" ,reason:"Payment Failed"},
];



export default function Page() {
    const [isLoading, setIsLoading] = useState(true);
    const getRowClassName = (params) => {
        return params.id % 2 === 1 ? 'alternateRow' : '';
    };

    return (
        <>
            <NavMain />
            
            <container className="extcont">
            <container className="cont1">
               Booking Cancelled
            </container>
                <Box className="cont2" sx={{ height: 550, width: 'auto' }}>
                {/* <DataGridOverlay loading={isLoading}> */}
                <DataGrid
                    
                    rows={rows}
                    columns={columns}
                    getRowClassName={getRowClassName} 
                    hideFooterPagination={true}
                />
                {/* </DataGridOverlay> */}
            </Box>
    
            
            </container>
        </>
    )
}