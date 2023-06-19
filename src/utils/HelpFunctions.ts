export const numberDivideDigits = (num: number): string => { return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') }

export const actionMutation = (index: number): string => {
  switch (index) {
    case 0:
      return 'A'
    case 1:
      return 'B'
    case 2:
      return 'C'
    case 3:
      return 'D'
    default:
      return ''
  }
}
