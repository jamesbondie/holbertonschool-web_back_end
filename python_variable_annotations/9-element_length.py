#!/usr/bin/env python3
"""Function length finder"""
from typing import Sequence, Iterable, List, Tuple


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """Input lst, output element's length"""
    return [(i, len(i)) for i in lst]
