import axios from 'axios';
import { assertType, firstItemOfArray, isOfType } from 'server/utils/assertions';
import { trpc } from 'server/utils/trpc';
import { z } from 'zod';

export const rickAndMortyRouter = trpc.router({
    getCharacters: trpc.procedure.input(z.object({ page: z.string() })).query(async ({ input }) => {
        const charactersResponse = await axios<unknown>('https://rickandmortyapi.com/api/character', {
            params: { page: input.page },
        });
        if (
            isOfType<RickAndMortyApiResponse<Character[]>>(charactersResponse.data, _ =>
                firstItemOfArray(_.results, character => 'id' in character && 'name' in character)
            )
        ) {
            return {
                success: true,
                response: charactersResponse.data,
            };
        }
        throw new Error('Unexpected type of response');
    }),
});
