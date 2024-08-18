#!/usr/bin/env python3
"""Sum mixed list module"""
from typing import List, Union


def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    "Input mixed list, output sum of it"
    x = 0
    for i in mxd_lst:
        x += i
    return x
