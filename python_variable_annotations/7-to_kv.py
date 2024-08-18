#!/usr/bin/env python3
"""Tuple creater"""
from typing import Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """Input k and v, output tuple of them"""
    return (k, v*v)
