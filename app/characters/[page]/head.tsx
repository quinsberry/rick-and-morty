export default async function Head(params: any) {
    console.log('params:', params);
    return (
        <>
            <title>Character: </title>
            <meta content="width=device-width, initial-scale=1" name="viewport" />
            <link rel="icon" href="/favicon.ico" />
        </>
    );
}
