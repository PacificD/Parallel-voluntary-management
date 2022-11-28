/*
 * @Author: Pacific_D
 * @Date: 2022-11-28 22:25:30
 * @LastEditTime: 2022-11-28 22:25:31
 * @LastEditors: Pacific_D
 * @Description:
 * @FilePath: \Parallel-voluntary-management\src\app\common\utils\getAllLetter.util.ts
 */
// 生成字母数组
const getAllLetter = () => {
  const letterStr =
    "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z"
  return letterStr.split(",")
}

export default getAllLetter
