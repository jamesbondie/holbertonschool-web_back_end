#!/usr/bin/env python3
"""
This module yields random values between 1 and 10 every iterations.
"""
import random
import asyncio
from typing import Generator

async def async_generator() -> Generator[float, None, None]:
    """Asynchronously yields values between 1 and 10 for 10 iterations."""
    for _ in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
