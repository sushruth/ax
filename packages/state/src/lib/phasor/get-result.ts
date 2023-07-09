import { Result, ResultObject } from '@ax/phasors';
import { Fetcher } from './lazy-bit.types';

export async function getResult<I, D, E>(
  fetcher: Fetcher<I, D>,
  input: I
): Promise<ResultObject<D, E>> {
  try {
    const result = await fetcher(input);
    return Result.Ok(result);
  } catch (error) {
    return Result.Err(error as E);
  }
}
