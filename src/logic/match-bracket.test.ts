import matchBracket from './match-bracket'
describe('括号匹配',() => {
  it('正常情况', () => {
    let str = '{a[b(c)d]e}'
    let res = matchBracket(str)
    expect(res).toBe(true)
  })
  it('不匹配', () => {
    let str = '{a[b(c))d]e}'
    let res = matchBracket(str)
    expect(res).toBe(false)
  })
  it('顺序不一致', () => {
    let str = '{a[b(c)d}e]'
    let res = matchBracket(str)
    expect(res).toBe(false)
  })
})