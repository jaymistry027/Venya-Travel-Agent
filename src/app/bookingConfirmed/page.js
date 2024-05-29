'use client'
import React from 'react'
import NavMain from '../NavMain'
import Box from '@mui/material/Box';
import { DataGrid,DataGridOverlay } from '@mui/x-data-grid';
import './bookingConfirmed.css';
import { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { GridRowClassNameParams } from '@mui/x-data-grid';
import '../general.css';
import Image from 'next/image';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';

const columns = [
    { field: 'id',
     headerName: 'Booking Id', 
     width: 280,
     headerClassName:"head1",
    },

    {
        field: 'propertyName',
        headerName: 'Property Name',
        width: 348,
        headerClassName:"head1",

    },
    {
        field: 'cincout',
        headerName: 'Check In - Check Out',
        width: 340,
        headerClassName:"head1",
    },
    {
        field: 'guestName',
        headerName: 'Guest Name',
        description: 'This column has a value getter and is not sortable.',
        width: 302,
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
        headerName: 'Confirmation Voucher',
        headerClassName:"head1",
        width: 289,
        renderCell:(params)=>{
            const handleDownload=()=>{
                console.log("abc");
            };
            return(
                <div>
                <button className='btn' style={{fontWeight:'normal'}}><FileDownloadOutlinedIcon className='download-icon'/> Download</button>
                </div>
            )
        }
    }
   // <FileDownloadIcon className='f'/>Download
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
            
            <container className="extcont">
            <container className="cont1">
                Booking Confirmed          
                </container>
                <Box className="cont2" sx={{ height: 550, width: '100%' }}>
                {/* <DataGridOverlay loading={isLoading}> */}
                <DataGrid
                    // rowHeight={75}
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