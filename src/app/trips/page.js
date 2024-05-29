'use client'
import React from 'react'
import NavMain from '../NavMain'
import Box from '@mui/material/Box';
import { DataGrid,DataGridOverlay } from '@mui/x-data-grid';
import './trips.css';
import { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { GridRowClassNameParams } from '@mui/x-data-grid';
import '../general.css';

const columns = [
    { field: 'id',
     headerName: 'Booking Id', 
     width: 270,
     headerClassName:"head1",
    },

    {
        field: 'propertyName',
        headerName: 'Property Name',
        width: 338,
        headerClassName:"head1",

    },
    {
        field: 'uniqueData',
        headerName: 'Total Amount Paid',
        width: 300,
        renderCell: (params) => (
            <div>
                {params.row.uniqueData.map((line, index) => (
                    <div key={index}>{line}</div>
                ))}
            </div>
        ),
        headerClassName:'head1'
    },
    {
        field: 'cincout',
        headerName: 'Check In - Check Out',
        width: 330,
        headerClassName:"head1",
    },
    {
        field: 'totalPAX',
        headerName: 'Total PAX',
        width: 300,
        renderCell: (params) => (
            <div>
                {params.row.totalPAX.map((line, index) => (
                    <div key={index}>{line}</div>
                ))}
            </div>
        ),
        headerClassName:'head1',
    },
    {
        field: 'guestName',
        headerName: 'Guest Name',
        description: 'This column has a value getter and is not sortable.',
        width: 322,
        headerClassName:"head1",
    },
];

const rows = [
    { id: "1", uniqueData:['₹50000/-' ,'Incl. of all taxes'], propertyName: 'Sheraton Grand Cape Coral', cincout: '21/09/2023 - 30/09/2023', totalPAX: ['15 PAX','+ 2 Pets'], guestName: "Rajesh Hiralal Kotwal" },
    { id: "2", uniqueData:['₹50000/-' ,'Incl. of all taxes'], propertyName: 'Sheraton Grand Cape Coral', cincout: '21/09/2023 - 30/09/2023', totalPAX: ['15 PAX','+ 2 Pets'], guestName: "Rajesh Hiralal Kotwal" },
    { id: "3", uniqueData:['₹50000/-' ,'Incl. of all taxes'], propertyName: 'Sheraton Grand Cape Coral', cincout: '21/09/2023 - 30/09/2023', totalPAX: ['15 PAX','+ 2 Pets'], guestName: "Rajesh Hiralal Kotwal" },
    { id: "4", uniqueData:['₹50000/-' ,'Incl. of all taxes'], propertyName: 'Sheraton Grand Cape Coral', cincout: '21/09/2023 - 30/09/2023', totalPAX: ['15 PAX','+ 2 Pets'], guestName: "Rajesh Hiralal Kotwal" },
    { id: "5", uniqueData:['₹50000/-' ,'Incl. of all taxes'], propertyName: 'Sheraton Grand Cape Coral', cincout: '21/09/2023 - 30/09/2023', totalPAX: ['15 PAX','+ 2 Pets'], guestName: "Rajesh Hiralal Kotwal" },
    { id: "6", uniqueData:['₹50000/-' ,'Incl. of all taxes'], propertyName: "Sheraton Grand Cape Coral", cincout: '21/09/2023 - 30/09/2023', totalPAX: ['15 PAX','+ 2 Pets'], guestName: "Rajesh Hiralal Kotwal" },
    { id: "7", uniqueData:['₹50000/-' ,'Incl. of all taxes'], propertyName: 'Sheraton Grand Cape Coral', cincout: '21/09/2023 - 30/09/2023', totalPAX: ['15 PAX','+ 2 Pets'], guestName: "Rajesh Hiralal Kotwal" },
    { id: "8", uniqueData:['₹50000/-' ,'Incl. of all taxes'], propertyName: 'Sheraton Grand Cape Coral', cincout: '21/09/2023 - 30/09/2023',totalPAX: ['15 PAX','+ 2 Pets'], guestName: "Rajesh Hiralal Kotwal" },
    { id: "9", uniqueData:['₹50000/-' ,'Incl. of all taxes'], propertyName: 'Sheraton Grand Cape Coral', cincout: '21/09/2023 - 30/09/2023', totalPAX: ['15 PAX','+ 2 Pets'], guestName: "Rajesh Hiralal Kotwal" },
];



export default function Page() {
    const [isLoading, setIsLoading] = useState(true);
    const getRowClassName = (params) => {
        return params.id % 2 === 1 ? 'alternateRow' : '';
    };

    return (
        <>
            <NavMain />
            
           
            <container className="cont1">
                Trips  
                <div className='ext'>
                <container className="outside">
                    <container className="ongoing">Ongoing</container>
                    <container className="upcoming">Upcoming</container>
                    <container className="past">Past</container>
                </container>
              
                </div>
                </container>
                
                <Box className="cont2" sx={{ height: 550, width: '100%' }}>
                {/* <DataGridOverlay loading={isLoading}> */}
                <DataGrid
                    
                    rows={rows}
                    columns={columns}
                    getRowClassName={getRowClassName} 
                    hideFooterPagination={true}
                />
                {/* </DataGridOverlay> */}
            </Box>
    
            
          
        </>
    )
}