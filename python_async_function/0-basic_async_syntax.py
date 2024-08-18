#!/usr/bin/env python3
"""
This module provides an asynchronous function to wait for a random amount of time.
"""
import asyncio
import random


async def wait_random(max_delay: int = 10) -> float:
    """Asynchronously waits for a random delay and returns the delay."""
    delay = random.uniform(0, float(max_delay))
    await asyncio.sleep(delay)

    return delay
