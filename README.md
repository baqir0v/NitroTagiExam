<button onClick={() => setsort({ property: "title", asc: true })}>az</button>
<button onClick={() => setsort({ property: "title", asc: false })}>za</button>
<button onClick={() => setsort(null)}>default</button>
{data &&
  data
    .filter(x => x.title.toLowerCase().trim().includes(query.toLowerCase()))
    .sort((a, b) => {
      if (sort) {
        if (sort.asc) {
          return a[sort.property].localeCompare(b[sort.property]);
        } else {
          return b[sort.property].localeCompare(a[sort.property]);
        }
      }
      return 0;
    })
    .map((item) => (
      <ul key={item._id}>
        <li><img style={{ width: "100px" }} src={item.image} alt="" /></li>
        <li>{item.title}</li>
        <li>{item.price}</li>
      </ul>
    ))}
///////////////////////////////////////////////////////////////////////////////////////
 {data && data.filter(x => x.title.toLowerCase().trim().includes(query.toLowerCase()))
                .sort((a, b) => {
                    if (sort && sort.asc === true) {
                        return (a[sort.property] > b[sort.property]) ? 1 : (b[sort.property] > a[sort.property] ? -1 : 0)
                    }
                    else if (sort && sort.asc === false) {
                        return (a[sort.property] > b[sort.property]) ? 1 : (b[sort.property] > a[sort.property] ? -1: 0)
                    }
                    else {
                        return 0
                    }
                })
                .map((item) => (
                    <ul key={item._id}>
                        <li><img style={{ width: "100px" }} src={item.image} alt="" /></li>
                        <li>{item.title}</li>
                        <li>{item.price}</li>
                    </ul>
                ))}
