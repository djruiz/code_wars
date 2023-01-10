function filter_list(l) {
    // Return a new array with the strings filtered out
    const noString = l.filter(item => !(typeof item === 'string'))
    console.log(noString);
    return noString;
  }

exports.filter_list = filter_list;