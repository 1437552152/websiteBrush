let util = {}

util.round = (v, e) => { // 巨强的四舍五入的转换函数
  // v表示要转换的值e表示要保留的位数
  let t = 1
  for (; e > 0; t *= 10, e--)
  for (; e < 0; t /= 10, e++)
  return Math.round(v * t) / t
}

util.accMul = (arg1, arg2) => { // 乘法：javascript的乘法结果会有误差，在两个浮点数相乘的时候会比较明显。这个函数返回较为精确的乘法结果。
  let m = 0, s1 = arg1.toString(), 
  s2=arg2.toString()
  try{m+=s1.split(".")[1].length}catch(e){}
  try{m+=s2.split(".")[1].length}catch(e){}
  return Number(s1.replace(".",""))*Number(s2.replace(".",""))/Math.pow(10,m)
}
export default util
