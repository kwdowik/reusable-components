Ex.1. [Shared logic] We'd like to reuse logic for fetching cars in `CarsTable`
  - Extract logic responsbile for fetching cars to `useFetchCars` hook
  - Use hook `useFetchCars` in `CarsList` component
  - Use the same hook in `CarsTable` component

Ex.2. [Shared presentation] We'd like to reuse `CarsList` with different source of data
  - Rename `CarsList` to `CarsListPresentation`
  - Pass cars as a prop instead of use useFetchCars hook inside `CarsListPresentation component`
  - Add container `CarsListContainer` that connects logic `useFetchCars` with presentation component `CarsListPresentation`
  - Export container `CarsListContainer` as a default

Ex.3. [Extensibility] We'd like to make container `CarsListContainer` presentation agnostic `CarsListPresentation`
  - Add HOC, to do that just rename container `CarsListContainer` to `withFetchCarsHOC`
  - Pass presentation component as a prop in HOC `withFetchCarsHOC`
  - Replace export default to be HOC with presentation component as a prop `withFetchCarsHOC(CarsListPresentation)`
