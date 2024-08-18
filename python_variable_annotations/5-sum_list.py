#!/usr/bin/env python3
"""Module finds sum of a list"""
from typing import List


def sum_list(input_list: List[float]) -> float:
    """Input list, output sum of it"""
    x = 0
    for i in input_list:
        x += i
    return x
