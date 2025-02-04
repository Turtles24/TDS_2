import React from "react";

export function MyPage({color = "#AEAEB2"}){
    return(
        <svg width="22" height="22" viewBox="0 0 22 22" fill={color} xmlns="http://www.w3.org/2000/svg">
            <path d="M4.75 6.55556C4.75 9.62381 7.54822 12.1111 11 12.1111C14.4518 12.1111 17.25 9.62381 17.25 6.55556C17.25 3.48731 14.4518 1 11 1C7.54822 1 4.75 3.48731 4.75 6.55556Z" fill={color}/>
            <path d="M21 21C21 17.9318 16.5228 15.4444 11 15.4444C5.47715 15.4444 1 17.9318 1 21H21Z" fill={color}/>
            <path d="M4.75 6.55556C4.75 9.62381 7.54822 12.1111 11 12.1111C14.4518 12.1111 17.25 9.62381 17.25 6.55556C17.25 3.48731 14.4518 1 11 1C7.54822 1 4.75 3.48731 4.75 6.55556Z" stroke={color} stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M21 21C21 17.9318 16.5228 15.4444 11 15.4444C5.47715 15.4444 1 17.9318 1 21H21Z" stroke={color} stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    )
}