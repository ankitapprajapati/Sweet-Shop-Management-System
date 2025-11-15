export default {
  create: jest.fn((data) => {
    return { _id: 1, ...data }; // fake user
  })
};
