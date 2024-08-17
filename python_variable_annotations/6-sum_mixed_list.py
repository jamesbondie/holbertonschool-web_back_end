from typing import List, Union
def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    x = 0
    for i in mxd_lst:
        x += i
    return x
