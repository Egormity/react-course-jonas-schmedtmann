import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getCabins } from '../../services/apiCabins';
import { useSearchParams } from 'react-router-dom';
import { ITEMS_PER_PAGE } from '../../utils/constants';

export function useCabins() {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryClient = useQueryClient();

  //--- PAGINATION ---//
  const page = +searchParams.get('page') || 1;

  const {
    isLoading,
    data: { data: cabins, count } = {},
    error,
  } = useQuery({
    queryKey: ['cabins', page],
    queryFn: () => getCabins(page),
  });

  //--- PREFETCHING ---//
  const pageCount = Math.ceil(count / ITEMS_PER_PAGE);

  if (page < pageCount)
    queryClient.prefetchQuery({
      queryKey: ['bookings', page + 1],
      queryFn: () => getCabins({ page: page + 1 }),
    });

  if (page > 1)
    queryClient.prefetchQuery({
      queryKey: ['bookings', page - 1],
      queryFn: () => getCabins({ page: page - 1 }),
    });

  return { isLoading, error, cabins, count };
}
