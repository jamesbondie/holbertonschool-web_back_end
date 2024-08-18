#!/usr/bin/env python3
"""Multiplier function module"""
from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """Input float multiplier, output function"""
    def function(multiplier: float) -> float:
        return multiplier ** 2
    return function
