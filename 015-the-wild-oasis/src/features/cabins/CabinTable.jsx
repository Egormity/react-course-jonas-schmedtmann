import { useSearchParams } from 'react-router-dom';

import Spinner from './../../ui/Spinner';
import CabinRow from './CabinRow';
import { useCabins } from './useCabins';
import Table from '../../ui/Table';
import Menus from '../../ui/Menus';
import Empty from '../../ui/Empty';

export default function CabinTable() {
  const { isLoading, error, cabins } = useCabins();
  const [seacrchParams, setSearchParams] = useSearchParams();

  if (cabins?.length === 0) return <Empty resourceName='cabins' />;

  //--- FILTER ---//
  const filterValue = seacrchParams.get('discount') || 'all';
  let filteredCabins;
  if (filterValue === 'all') filteredCabins = cabins;
  if (filterValue === 'no-discount') filteredCabins = cabins?.filter(cabin => cabin.discount === 0);
  if (filterValue === 'with-discount') filteredCabins = cabins?.filter(cabin => cabin.discount > 0);

  //--- SORT ---//
  const sortBy = seacrchParams.get('sortBy') || 'name-asc'; // 'startData-asc'
  const [field, direction] = sortBy.split('-');
  const modifier = direction === 'asc' ? 1 : -1;
  const filteredAndSortedCabins = filteredCabins?.sort((a, b) => (a[field] - b[field]) * modifier);

  if (isLoading) return <Spinner />;

  return (
    <Menus>
      <Table columns='0.6fr 1.8fr 2.2fr 1fr 1fr 1fr'>
        <Table.Header role='row'>
          <div></div>
          <div>Cabin</div>
          <div>Capacity</div>
          <div>Price</div>
          <div>Discount</div>
          <div></div>
        </Table.Header>

        <Table.Body
          // data={cabins}
          // data={filteredCabins}
          data={filteredAndSortedCabins}
          render={cabin => <CabinRow cabin={cabin} key={cabin.id} />}
        />
      </Table>
    </Menus>
  );
}
