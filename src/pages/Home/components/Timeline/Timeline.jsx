import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import CarRentalIcon from '@mui/icons-material/CarRental';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import PaymentIcon from '@mui/icons-material/Payment';
import CelebrationIcon from '@mui/icons-material/Celebration';
import ReceiptIcon from '@mui/icons-material/Receipt';
import BuildIcon from '@mui/icons-material/Build';
import Typography from '@mui/material/Typography';

import {ThemeProvider} from '@mui/material/styles';

import theme from '../../../../theme.js';

import './styles.css';



export default function WorkFlowTimeline() {
    return (
        <ThemeProvider theme={theme}>
        <Timeline className="timeline" position="right" sx={{ '& .MuiTimelineItem-root': { minHeight: 150 } }}>

            {/* Step 2: Vehicle Selection */}
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot color="primary" sx={{ width: 50, height: 50, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <CarRentalIcon sx={{ fontSize: 30, width: 30, height: 30}} />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '40px', px: 4 }}>
                    <Typography fontSize="1.1rem"> Вы оставляете заявку с параметрами автомобиля</Typography>
                </TimelineContent>
            </TimelineItem>

            {/* Step 3: Test Drive */}
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color="secondary" sx={{ width: 50, height: 50, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <DirectionsCarIcon sx={{ fontSize: 30, width: 30, height: 30}} />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '40px', px: 4 }}>
                    <Typography fontSize="1.1rem">Мы находим лучшие варианты, проверяем их и предоставляем полный отчет</Typography>
                </TimelineContent>
            </TimelineItem>

            {/* Step 4: Customization & Add-ons */}
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color="primary" sx={{ width: 50, height: 50, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <ReceiptIcon sx={{ fontSize: 30, width: 30, height: 30}} />
                    </TimelineDot>
                </TimelineSeparator>
                <TimelineContent sx={{ py: '0px', px: 4, paddingTop: '80px'}}>
                    <Typography fontSize="1.1rem"> Оформляем сделку, организуем транспортировку и передачу автомобиля
                    </Typography>
                </TimelineContent>
            </TimelineItem>

            {/* Step 5: Financing & Paperwork */}
        </Timeline>
        </ThemeProvider>
    );
}