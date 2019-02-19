# Gene Variants

# Features
- Enter a gene name (case-insensitive), and a dropdown is populated
  with gene names that start with the characters entered.
- Select a gene from the dropdown and the table is populated with variants
  of the selected gene, grouped by the variant's alias.
- Click on the "Group by" dropdown to change the grouping criteria
  to a different variant property.
- Click "No grouping" in the dropdown to flatten the results in the table.
- Click on the arrow in column 1 to expand the group.
- Sort the table by clicking on the column header. Click again to toggle
  ascending or descending sort order.
- Click the link in the "More Info" column to open a new browser tab
that describes the variant.
 - Use the pagination controls at the bottom of the table to navigate pages or
 change the page size.

# Tech Stack

I was aiming for a MERN stack (Mongo, Express, React, Node), but modeled the 
database as an in-memory store because of time constraints.

## Server

The server is NodeJS with Express.

Routes:
- `GET /genes/?q=<prefix>`
Returns a JSON response containing gene names that match the specified prefix.
- `GET /genes/:name/variants`
Returns a JSON response containing all variants of the specified gene.

## Client

The client is a React app created by `create-react-app`. It uses redux for 
state management, with the familiar reducer, action creators, and selectors.

The main component class `VariantSearchContainer` is a connected component that
passes props (from selectors) and action dispatchers to lower-level components.

Jest is used for the simple sanity tests, with snapshots for the assertions.

## Data store

The server loads the variants TSV into memory and creates a ordinary
JS Map of gene names to an array of variants.

# Installation

Clone this repo locally, then:
```
cd variant-search
cd client
yarn (or npm install)
cd ../server
yarn (or npm install)
```

# Running

The server and client must be started in different terminals:

- Server

```
cd server
node app.js
```

The server is now listening on port 8080.

- Client

```
cd client
yarn start
```

The yarn script opens a browser window with React hot module replacement.

# Testing

Run the client tests:

```
cd client
yarn run test
```
