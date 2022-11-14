function choices(items) {
  const idx = Math.floor(Math.random() * (items.length));
  return items[idx]
}

function removes(items, item){
  const idx = items.indexOf(item);

  if (idx === -1) return undefined

  return items.splice(idx,1)
}

export { choices, removes }