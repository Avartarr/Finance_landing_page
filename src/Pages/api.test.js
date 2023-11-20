// import Grip from "./Grip";

// describe('API Consumption Tests',() => {
//     it("should fetch data",  () => {
//         global.fetch = jest.fn().mockResolvedValue({
//             json: jest.fn().mockResolvedValue([{ id:1, title: 'test' }])
//         });

//         return fetchData().then((data) => {
//             expect(data).toEqual([{id: 1, title: 'test'}]);
//         });
//     });

//     it('fetchData should handle errors', () => {
//         global.fetch = jest.fn().mockRejectedValue(new Error('error'));

//         return fetchData().catch((error) => {
//             expect(error.message).toBe('error')
//         });
//     });
// });