import styled from 'styled-components';

import Spinner from '../../ui/Spinner';
import { useRecentBookings } from './useRecentBookings';
import { useRecentStays } from './useRecentStays';
import Stats from './Stats';
import { useCabins } from '../cabins/useCabins';

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

export default function DashboardLayout() {
  const { isLoading: isLoading1, bookings } = useRecentBookings();
  const { isLoading: isLoading2, stays, confirmedStays, numDays } = useRecentStays();
  const { cabins, isLoading: isLoading3 } = useCabins();

  const isHappening = isLoading1 || isLoading2 || isLoading3;

  if (isHappening) return <Spinner />;

  return (
    <StyledDashboardLayout>
      <Stats
        bookings={bookings}
        confirmedStays={confirmedStays}
        numDays={numDays}
        cabinCount={cabins.length}
      />
      <div>Statistics</div>
      <div>{`Today's activities`}</div>
      <div>Chart stay durations</div>
      <div>Chart sales</div>
    </StyledDashboardLayout>
  );
}
