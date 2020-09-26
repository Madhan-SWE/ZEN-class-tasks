/**
 * @param {string} s
 * @param {number[]} cost
 * @return {number}
 */
var minCost = function(s, cost) {
 
    let ans = 0;
    let maxi = -Infinity;
    let n = s.length;
    for(let i=0;i<n;i++)
        {
          if(i>0 && i<n-1)
              {
                  if(s[i+1]===s[i] || s[i-1]===s[i])
                      {
                          ans += cost[i];
                          if(cost[i]>maxi)
                              {
                                  maxi=cost[i];
                              }
                          if(s[i+1]!==s[i])
                              {
                                  ans -= maxi;
                                  maxi = -Infinity;
                              }
                      }
              }
            else 
                {
                    if(i===0)
                        {
                            if(s[i+1]===s[i])
                                {
                                    ans += cost[i];
                                    maxi = cost[i];
                                }
                        }
                    if(i===n-1)
                        {
                            if(s[i-1]===s[i])
                                {
                                    ans +=cost[i];
                                    if(cost[i]>maxi)
                                     {
                                       maxi=cost[i];
                                     }
                                     ans -= maxi;
                                     maxi = -Infinity;
                                    
                                }
                        }
                }
        }
        return ans;
};
